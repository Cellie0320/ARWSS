# Automated Robotic Waste Sorting System with CoppeliaSim

A robotic sorting system implemented using CoppeliaSim (formerly V-REP) and Lua scripts. The system uses a KR16 robot arm, vision sensors, and a conveyor belt to sort objects based on their material type (plastic, metal, paper).

## Features

- Automated object detection and sorting
- Real-time position tracking and display
- Vision-based material detection
- Vacuum cup gripper system
- Conveyor belt control system
- Dynamic object creation and handling

## Prerequisites

- CoppeliaSim (Version 4.7.0 or higher)
- Lua 5.3+
- Required CoppeliaSim add-ons:
    - IK (Inverse Kinematics) module
    - Vision sensor module
    - Proximity sensor module

## Visual Studio Code Extensions

- Install the **Lua** extension by sumneko
- Install the **Lua Debug** extension by actboy168

## Project Structure
```bash
lua/
├── main.lua # Main control script
├── kr16_robot_arm.lua # Robot arm control 
├── baxter_vacuum_cup.lua # Gripper control
├── box_creation.lua # Object generation 
├── vision_sensor.lua # Vision processing
```

## Installation

1. Copy the lua folder to your CoppeliaSim installation directory:
     ```bash
     cp -r lua/ [CoppeliaSim-directory]/
     ```
2. Load the scene file in CoppeliaSim:
     - Open CoppeliaSim
     - File → Open Scene
     - Navigate to and select the scene file

## Visual Studio Code Setup:

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing Ctrl+Shift+X.
3. Search for and install the Lua extension by sumneko.
4. Search for and install the Lua Debug extension by actboy168.

## Usage

### Starting the Simulation

1. Open CoppeliaSim.
2. Load the project scene.
3. Click the Start Simulation button or press Ctrl+P.

## System Operation

### The system operates in the following sequence:

1. Objects are randomly created and placed on the conveyor belt.
2. Proximity sensor detects objects and stops the conveyor.
3. Vision sensor identifies the material type.
4. Robot arm picks up the object using the vacuum gripper.
5. Object is sorted into the appropriate bin based on material.
6. Process repeats for new objects (if any).

## Signal System

- The system uses various signals for inter-script communication:
    ```bash
    | Signal Name              | Type    | Description                          |
    |--------------------------|---------|--------------------------------------|
    | detectedBox              | Integer | Indicates object detection (0/1)     |
    | boxColor                 | Integer | Detected material type (1=Paper, 2=Metal, 3=Plastic) |
    | start_vision_inspection  | Integer | Triggers vision processing            |
    | inspected_color          | Integer | Result of color inspection            |
    ```
## Contact
- For support or questions, 
note : contact info to be provided in due course

# Troubleshooting

### Common issues and solutions:

- **Conveyor not moving**
    - Check conveyor_system.lua is properly loaded
    - Verify velocity parameters in configuration
    - Ensure no objects are blocking the conveyor

- **Robot arm not responding**
    - Check IK module installation
    - Verify target positions are within reach
    - Check for collision detection issues

- **Vision sensor issues**
    - Verify lighting conditions
    - Check vision sensor resolution settings
    - Ensure proper object materials are set
## Frequently Asked Questions (FAQ)

### How do I change the speed of the conveyor belt?

You can change the speed by modifying the CONVEYOR_SPEED parameter in the config.lua file.

### How do I add new object types for sorting?

Update the box_creation.lua script to include the new object types and modify the vision processing logic in vision_sensor.lua to detect the new materials.

### How do I debug Lua scripts in Visual Studio Code?

Install the Lua Debug extension by actboy168 and configure the launch.json file to set up debugging for your Lua scripts.

### How do I handle multiple objects on the conveyor belt?

Ensure the proximity sensor logic in main.lua can handle multiple detections and update the sorting logic accordingly.

### How do I improve the accuracy of the vision sensor?

Adjust the resolution and lighting settings of the vision sensor in CoppeliaSim and fine-tune the image processing algorithms in vision_sensor.lua.

## Acknowledgments
- CoppeliaSim (formerly V-REP) development team
- Special thanks to Mechatronics Ninja for their insightful tutorials.
  YouTube Channel: https://www.youtube.com/@mechatronicsninja3806
