# System Architecture

## Overview
This document provides a high-level overview of the system architecture for the Automated Robotic Waste Sorting System (ARWSS). It includes descriptions of the main components, their interactions, and the overall system flow.

## High-Level Design
### System Architecture Flowchart
![System Architecture Flowchart](path/to/flowchart.png)

### Description
- **Central Block (Pink)**: **Sensor Information Handling** - This is the core of the system, processing data from various sensors.
- **Left Side (Blue Blocks)**:
  - **Sorting and Classification**: Uses algorithms to classify data based on sensor inputs.
  - **Safety Protocol Monitoring**: Ensures system safety by monitoring protocols.
- **Right Side (Orange Blocks)**:
  - **Robot Control Systems**: Manages robotic arms and their capabilities.
  - **Position Feedback Systems**: Uses actuators and sensors for continuous improvement.
- **Top (Green Block)**: **Data Management and Analytics** - Tools for tracking decision performance.
- **Bottom (Greenish-Yellow Block)**: **Communication Integration** - APIs for data exchange between system components.

## Components
### 1. Sensor Information Handling
- **Description**: This component processes data from various sensors, including RGB-D cameras, proximity sensors, and weight sensors.
- **Responsibilities**: Data collection, preprocessing, and forwarding to the sorting and classification module.
- **Relevant Files**:
  - [vision_sensor.lua](ARWSS/Lua/vision_sensor.lua)

### 2. Sorting and Classification
- **Description**: This module uses machine learning algorithms to classify waste materials.
- **Responsibilities**: Analyzing sensor data, determining waste type, and sending commands to the robotic arm.
- **Relevant Files**:
  - [main.lua](ARWSS/Lua/main.lua)

### 3. Safety Protocol Monitoring
- **Description**: Ensures the system operates safely by monitoring various safety protocols.
- **Responsibilities**: Detecting potential hazards and triggering safety mechanisms.

### 4. Robot Control Systems
- **Description**: Manages the movements and operations of the robotic arm.
- **Responsibilities**: Executing sorting commands, controlling gripper actions, and ensuring precise movements.
- **Relevant Files**:
  - [kr16_robot_arm.lua](ARWSS/Lua/kr16_robot_arm.lua)
  - [baxter_vacuum_cup.lua](ARWSS/Lua/baxter_vacuum_cup.lua)

### 5. Position Feedback Systems
- **Description**: Provides continuous feedback on the position and status of the robotic arm.
- **Responsibilities**: Monitoring actuator positions, adjusting movements, and ensuring accuracy.

### 6. Data Management and Analytics
- **Description**: Manages data storage, analysis, and reporting.
- **Responsibilities**: Storing sensor data, analyzing system performance, and generating reports.
- **Relevant Files**:
  - [main.py](ARWSS/src/backend/main.py)
  - [database.py](ARWSS/src/backend/database.py)
  - [initialize_db.py](ARWSS/src/backend/initialize_db.py)

### 7. Communication Integration
- **Description**: Facilitates communication between different system components.
- **Responsibilities**: Providing APIs for data exchange, ensuring seamless integration, and maintaining communication protocols.
- **Relevant Files**:
  - [main.py](ARWSS/src/backend/main.py)

## Data Flow
1. **Data Collection**: Sensors collect data and send it to the Sensor Information Handling module.
2. **Data Processing**: The data is preprocessed and forwarded to the Sorting and Classification module.
3. **Classification**: The Sorting and Classification module determines the type of waste and sends commands to the Robot Control Systems.
4. **Execution**: The Robot Control Systems execute the sorting commands, with feedback from the Position Feedback Systems.
5. **Data Management**: All data is stored and analyzed by the Data Management and Analytics module.
6. **Communication**: The Communication Integration module ensures all components can exchange data seamlessly.

## User Interface
### Description
The user interface allows users to interact with the system, monitor sorting processes, and view analytics.
- **Relevant Files**:
  - [Login.jsx](ARWSS/src/frontend/src/components/Login.jsx)
  - [Plastic.jsx](ARWSS/src/frontend/src/components/Plastic.jsx)
  - [Paper.jsx](ARWSS/src/frontend/src/components/Paper.jsx)
  - [Metal.jsx](ARWSS/src/frontend/src/components/Metal.jsx)
  - [Menu.jsx](ARWSS/src/frontend/src/components/Menu.jsx)

## Conclusion
This document provides a high-level overview of the ARWSS architecture. For detailed technical specifications, refer to the individual component documentation.