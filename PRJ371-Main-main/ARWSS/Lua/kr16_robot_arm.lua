-- this is the inverse kinematics script of the robot :
function sysCall_init()
-- Take a few handles from the scene:
simBase=sim.getObjectHandle('KR16')
simTip=sim.getObjectHandle('tip')
simTarget=sim.getObjectHandle('target')
ikEnv=simIK.createEnvironment()
-- Prepare the 2 ik groups, using the convenience function 'simIK.addElementFromScene':
ikGroup_undamped=simIK.createGroup(ikEnv)
simIK.setGroupCalculation(ikEnv,ikGroup_undamped,simIK.method_pseudo_inverse,0,10)
simIK.addElementFromScene(ikEnv,ikGroup_undamped,simBase,simTip,simTarget,simIK.constraint_pose)
ikGroup_damped=simIK.createGroup(ikEnv)
simIK.setGroupCalculation(ikEnv,ikGroup_damped,simIK.method_damped_least_squares,0.3,99)
simIK.addElementFromScene(ikEnv,ikGroup_damped,simBase,simTip,simTarget,simIK.constraint_pose)
end
function sysCall_actuation()
if simIK.applyIkEnvironmentToScene(ikEnv,ikGroup_undamped,true)~=simIK.result_success then
simIK.applyIkEnvironmentToScene(ikEnv,ikGroup_damped)
end
end
function sysCall_cleanup()
simIK.eraseEnvironment(ikEnv)
end
