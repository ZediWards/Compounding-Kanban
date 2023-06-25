
# Compounding Kanban  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Kanban for Compounding Department in a Manufacturing Facility.
</br>
</br>

## Features
Right now this only uses local storage. After it takes full form it will be able to be hosted on a local server. Once hosted that way, all employees will be able to reference the Compounding Department's Kanban from their own departments.

- Ordering Department can make sure enough components are on hand by knowing what batch production is running.

- Scheduling Department will be able to see what batches are currently being ran and if production is on schedule.

- Production Line Leads can plan their shifts by knowing current and upcomming batch information.
</br>

## Screenshots

![kanban](https://github.com/ZediWards/Compounding-Kanban/assets/33021719/e448110b-909f-45d0-a431-35c465a09716)
Kanban page
</br>
</br>
</br>

![run-hover](https://github.com/ZediWards/Compounding-Kanban/assets/33021719/69588089-2277-45c4-8211-04595432d638)
Hovering over a flavor in the Production Sequence area shows the volume in each batch.
</br>
</br>
</br>


![tank-modal](https://github.com/ZediWards/Compounding-Kanban/assets/33021719/fe8bca4a-89c4-47d6-a50b-e35631e2862d)
Tank modal tool shows product level in the tank, estimated change over time, and unit amount at the bottom prop of the tank
</br>
</br>
</br>

![admin-tank](https://github.com/ZediWards/Compounding-Kanban/assets/33021719/11d8855e-30d8-42ca-bcb5-a89f7a8b54fb)
Edit tank information (admin)
</br>
</br>
</br>

![admin-runs](https://github.com/ZediWards/Compounding-Kanban/assets/33021719/ccb0f60c-d1ad-4148-ac6b-94cd48ea985e)
Color of border matches flavor of run (admin)
</br>
</br>
</br>

![admin-notes](https://github.com/ZediWards/Compounding-Kanban/assets/33021719/905b66e4-2883-4f74-806c-4fe69dd80159)
Edit note information (admin)
</br>
</br>
</br>
## Roadmap

- Make cans per minute editable from the UI

- Make tank dimension variables editable from the UI

- Switch from storing data in local storage to PostGres database

- Create server and API with Express.js and Node.js

- Bundle it all up in a Docker container to run on a local server
</br>

## Run Locally (to use)
- Download & unzip the repo .zip file

- Drag the static/index.html file into the browser
</br>

## Run Locally with Live Server (development)

Clone the project

```bash
  git clone https://github.com/ZediWards/Compounding-Kanban.git
```

Go to the index.html file

```bash
  cd Compounding-Kanban/static/index.html
```

Start Live Server

```bash
  live-server
```
</br>
</br>
</br>




