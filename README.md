# YPage

## Server configuration

### Install dependencies
```bash
cd server
python -m venv venv #create virtual environment
source venv/bin/activate #activate virtual environment
pip install -r requirements.txt #install dependencies
```

### Build docker container
```bash
cd server
docker build -t flask-server .
```

## Connecting to the server

### Run docker container
```bash
docker run -d -p 5000:5000 flask-server
```

### Access the server
```bash
curl http://localhost:5000/admin
```
Or open your browser and go to `http://localhost:5000/admin`