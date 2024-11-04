function sysCall_init()
corout=coroutine.create(coroutineMain)
end
function sysCall_actuation()
if coroutine.status(corout)~='dead' then
local ok,errorMsg=coroutine.resume(corout)
if errorMsg then
error(debug.traceback(corout,errorMsg),2)
end
end
end
function sysCall_cleanup()
-- do some clean-up here
end
function coroutineMain()
-- Put some initialization code here
vision_sensor=sim.getObjectHandle('vision_sensor')
av_color={0,0,0}
--the resolution of the vision sensor:
resolutionX=128
resolutionY=128
sim.setInt32Signal('start_vision_inspection',0)
sim.setInt32Signal('inspected_color',0)
sim.setFloatSignal('Avrge_Red',0) -- the average calculated red color
sim.setFloatSignal('Avrge_Green',0) -- the average calculated green color
sim.setFloatSignal('Avrge_Blue',0) -- the average calculated blue color
while true do
if sim.getInt32Signal('start_vision_inspection')==1 then
av_color=calculateAverageColor()
if av_color[1]>130 and av_color[2]<50 and av_color[3]<50 then
sim.setInt32Signal('inspected_color',1) -- 1 RED color dominance
print('red color detected Red')
elseif av_color[2]>130 and av_color[1]<50 and av_color[3]<50 then
sim.setInt32Signal('inspected_color',2) -- 2 GREEN color dominance
elseif av_color[3]>130 and av_color[2]<50 and av_color[1]<50 then
sim.setInt32Signal('inspected_color',3) -- 3 BLUE color dominance
else
sim.setInt32Signal('inspected_color',-1)
end
sim.setInt32Signal('start_vision_inspection',0)
end
end
end
function calculateAverageColor()
-- return the average RGB color of the vision sensor image
local averageColor={}
local s={0,0,0}
local imgHandle = simIM.readFromVisionSensor(vision_sensor)
local image=sim.getVisionSensorCharImage(vision_sensor) --,0,0,512,512)
local imgTable={} -- {r1,g1,b1,r2,g2,b2,r3,g3,b3.....}
local imgTable=sim.unpackUInt8Table(image) -- tranform the string image to a table
for i=1,#imgTable,3 do
rgb = {imgTable[i],imgTable[i+1],imgTable[i+2]}
s={s[1]+imgTable[i],s[2]+imgTable[i+1],s[3]+imgTable[i+2]}
end
s={s[1]/(resolutionX*resolutionY),s[2]/(resolutionX*resolutionY),s[3]/(resolutionX*resolutionY)}
print('AverageColor={Red='..s[1]..' ,Green= '..s[2]..' ,Blue='..s[3]..'}')
return s
end
