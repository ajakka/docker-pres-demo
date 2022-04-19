# Docker presentation demo

Demo Docker project for presentation

## SSH-ing to AWS Instance

1. Change key permission (one time only)

`sudo chmod 600 instance_key.pem`

2. Access the server

`ssh -i instance_key.pem ubuntu@0.0.0.0`

3. Update system

`sudo apt-get update`

4. Install necessary packages

`sudo apt-get install ca-certificates curl gnupg lsb-release`

5. Add Docker’s official GPG key

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`

6. Setup the stable repository

```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

7. Install Docker Engine

`sudo apt-get install docker-ce docker-ce-cli containerd.io`

## Clone the project

`git clone https://github.com/ajakka/docker-pres-demo.git`

## Use docker

1. Build the image

`docker build -t fpt/nodeapp:1.0.0 .`

2. Start the container

`docker run -p 8080:8080 --name fpt-nodeapp fpt/nodeapp:1.0.0`
