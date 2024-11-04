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
conveyorSystem__ctrlPt = sim.getObject('/conveyorSystem/_ctrlPt[0]') -- full path is given
-- Put your main loop here, e.g.:
-- add a file dialog to allow user to choose the object (in .stl format)
--[[pathAndName = sim.fileDialog(sim.filedlg_type_load,'choose an object','','','','stl')
if pathAndName == nil then
dialogHandle=sim.displayDialog('no mesh file slected','The simulation will stop since no STL file has been selected',sim.dlgstyle_ok,true)
sim.stopSimulation()
end
]]--
while sim.getSimulationState() ~= sim.simulation_advancing_abouttostop do -- and not(pathAndName == nil) do
pos = math.random(1,3)
color = {0,0,0}
color[pos] = 1
objects ={} -- the list of the objects (objects[1]:palstic objects[2]:paper objects[3]:metal)
objects[1] = {'./Paper001','./Paper002'}
objects[2] = {'./metal001','./metal002'}
objects[3] = {'./Plastic_Bottle001','./Plastic_Bottle002','./Plastic_Bottle003','./Plastic_Bottle004','./Plastic_Bottle005'}
pos2 = math.random(1,#objects[pos])
print('pos1:'..pos ..' pos2:'..pos2)
objectToCopyHandle = sim.getObject(objects[pos][pos2])
print('Created random Object:'..objects[pos][pos2]..' objectToCopyHandle:'..objectToCopyHandle)
shapeHandle = sim.copyPasteObjects({objectToCopyHandle},0)[1] --the random object to place on the conveyor
print('Copied shapeHandle:'..shapeHandle)
--shapeHandle = sim.importShape (0,pathAndName,32+16+1,0,1)
sim.setObjectPosition(shapeHandle,conveyorSystem__ctrlPt,{0,-0.2,0.1})
--sim.setShapeColor(shapeHandle,nil,sim.colorcomponent_ambient,color)
sim.setObjectInt32Param(shapeHandle,sim.shapeintparam_static,0)
sim.setObjectInt32Param(shapeHandle,3004,1) -- respondable parameter
sim.setObjectSpecialProperty(shapeHandle,sim.objectspecialproperty_collidable+sim.objectspecialproperty_measurable+sim.objectspecialproperty_detectable)
sim.setObjectFloatParam(shapeHandle,sim.shapefloatparam_shading_angle,40)
--[[]]--
sim.resetDynamicObject(shapeHandle)
-- added for this version
sim.setShapeInertia(shapeHandle,{0.4,0,0, 0,0.4,0, 0,0,0.4},{0.2,0,0,0, 0,0.1,0,0, 0,0,0.1,0})
sim.setShapeMass(shapeHandle,0.1)
res=sim.setEngineFloatParam(sim.bullet_body_lineardamping,shapeHandle,0.4)
res=sim.setEngineFloatParam(sim.bullet_body_angulardamping,shapeHandle,0.9)
res=sim.setEngineFloatParam(sim.bullet_body_friction,shapeHandle,0.7)
res=sim.setEngineFloatParam(sim.ode_body_lineardamping,shapeHandle,0.4)
res=sim.setEngineFloatParam(sim.ode_body_angulardamping,shapeHandle,0.9)
res=sim.setEngineFloatParam(sim.ode_body_friction,shapeHandle,0.7)
sim.resetDynamicObject(shapeHandle)
sim.wait(30)
end
end
-- See the user manual or the available code snippets for additional callback functions and details
