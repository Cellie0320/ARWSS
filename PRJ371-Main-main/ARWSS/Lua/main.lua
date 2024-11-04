local plasticCount = 0
local paperCount = 0
local metalCount = 0
local currentYear = os.date("%Y")
local analytics = {
[2022] = {plastics = 0, paper = 0, metals = 0},
[2023] = {plastics = 0, paper = 0, metals = 0},
[2024] = {plastics = 0, paper = 0, metals = 0} -- Ensure 2024 is included
}
local binPositions = {
[1] = {1.2, 0.0, 0.8}, -- Paper bin (Bin 1)
[2] = {1.2, 0.4, 0.8}, -- Metal bin (Bin 2)
[3] = {1.2, 0.8, 0.8} -- Plastics bin (Bin 3)
}
local http = require("socket.http") -- Import HTTP module
local ltn12 = require("ltn12") -- For handling request body
function sendDataToAPI(year, plastics, paper, metals, endpoint)
local url = "http://localhost:5000/" .. endpoint -- Ensure this matches your Flask endpoint
local data = string.format('{"year":%d,"plastics":%d,"paper":%d,"metals":%d}', year, plastics, paper, metals)
local response_body = {}
local res, code, response_headers, status = http.request{
url = url,
method = "POST",
headers = {
["Content-Type"] = "application/json",
["Content-Length"] = tostring(#data)
},
source = ltn12.source.string(data),
sink = ltn12.sink.table(response_body)
}
if code ~= 200 and code ~= 201 then
print("Failed to send data to API. Status code: " .. code)
else
print("Successfully sent data to API. Response: " .. table.concat(response_body))
end
end
function sysCall_init()
corout = coroutine.create(coroutineMain)
end
function sysCall_actuation()
if coroutine.status(corout) ~= 'dead' then
local ok, errorMsg = coroutine.resume(corout)
if errorMsg then
error(debug.traceback(corout, errorMsg), 2)
end
end
end
function sysCall_cleanup()
print("Total Plastics Sorted: " .. plasticCount)
print("Total Papers Sorted: " .. paperCount)
print("Total Metals Sorted: " .. metalCount)
-- Send the final data to API (if needed)
for year, data in pairs(analytics) do
sendDataToAPI(year, data.plastics, data.paper, data.metals, "results")
sendDataToAPI(year, data.plastics, data.paper, data.metals, "history")
end
end
function coroutineMain()
target = sim.getObjectHandle('target')
KR16_base = sim.getObjectHandle('KR16_base')
KR16_flange = sim.getObjectHandle('KR16_flange')
vel = 0.1
accel = 70
jerk = 70
currentVel = {0, 0, 0, 0}
currentAccel = {0, 0, 0, 0}
maxVel = {vel, vel, vel, vel}
maxAccel = {accel, accel, accel, accel}
maxJerk = {jerk, jerk, jerk, jerk}
targetVel = {0, 0, 0, 0}
while true do
local quaternion1 = {0.0, 1.0, 4.5474735088646e-13, -4.3711565922422e-08}
local position1 = {0.8, -0.55, 0.875}
sim.rmlMoveToPosition(target, KR16_base, -1, currentVel, currentAccel, maxVel, maxAccel, maxJerk, position1, quaternion1, targetVel)
while sim.getInt32Signal('detectedBox') == 1 do
detectedObjectHandle = sim.getInt32Signal('detectedObjectHandle')
local bin = 0
local detectedObjectName = sim.getObjectAlias(detectedObjectHandle)
print('Detected object name: ' .. detectedObjectName)
local simulatedYear = 2024 -- Set the year to 2024
if string.find(detectedObjectName, "Paper") then
bin = 1
paperCount = paperCount + 1
analytics[simulatedYear].paper = analytics[simulatedYear].paper + 1
print('Sorting Paper into Bin 1')
elseif string.find(detectedObjectName, "metal") then
bin = 2
metalCount = metalCount + 1
analytics[simulatedYear].metals = analytics[simulatedYear].metals + 1
print('Sorting Metal into Bin 2')
elseif string.find(detectedObjectName, "Plastic") then
bin = 3
plasticCount = plasticCount + 1
analytics[simulatedYear].plastics = analytics[simulatedYear].plastics + 1
print('Sorting Plastic into Bin 3')
end
local quaternion2 = {0.0, 1.0, 4.5474735088646e-13, -4.3711565922422e-08}
local position2 = sim.getObjectPosition(detectedObjectHandle, -1)
sim.rmlMoveToPosition(target, KR16_base, -1, currentVel, currentAccel, maxVel, maxAccel, maxJerk, position2, quaternion2, targetVel)
sim.setObjectInt32Param(detectedObjectHandle, 3003, 1)
sim.resetDynamicObject(detectedObjectHandle)
sim.setObjectParent(detectedObjectHandle, KR16_flange, true)
sim.rmlMoveToPosition(target, KR16_base, -1, currentVel, currentAccel, maxVel, maxAccel, maxJerk, position1, quaternion1, targetVel)
local binPosition = binPositions[bin]
local quaternion3 = {0.0, 1.0, 4.5474735088646e-13, -4.3711565922422e-08}
sim.rmlMoveToPosition(target, KR16_base, -1, currentVel, currentAccel, maxVel, maxAccel, maxJerk, binPosition, quaternion3, targetVel)
sim.setObjectInt32Param(detectedObjectHandle, 3003, 0)
sim.resetDynamicObject(detectedObjectHandle)
sim.setObjectParent(detectedObjectHandle, -1, true)
sendDataToAPI(simulatedYear, analytics[simulatedYear].plastics, analytics[simulatedYear].paper, analytics[simulatedYear].metals, "results")
end
end
end
