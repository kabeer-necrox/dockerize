(base) kabeer@kabeer-HP-EliteBook-745-G2:~/D1/getting-started-app$ touch Dockerfile
(base) kabeer@kabeer-HP-EliteBook-745-G2:~/D1/getting-started-app$ docker build -t getting-started .
DEPRECATED: The legacy builder is deprecated and will be removed in a future release.
            Install the buildx component to build images with BuildKit:
            https://docs.docker.com/go/buildx/

Sending build context to Docker daemon  65.38MB
Step 1/6 : FROM node:18-alpine
18-alpine: Pulling from library/node
661ff4d9561e: Pull complete 
0f158788f409: Pull complete 
f028dff98271: Pull complete 
18f25c33705d: Pull complete 
Digest: sha256:b1a0356f7d6b86c958a06949d3db3f7fb27f95f627aa6157cb98bc65c801efa2
Status: Downloaded newer image for node:18-alpine
 ---> f3776b60850d
Step 2/6 : WORKDIR /app
 ---> Running in 52bc49515fbe
Removing intermediate container 52bc49515fbe
 ---> 776d690afc7c
Step 3/6 : COPY . .
 ---> c7f86057050b
Step 4/6 : RUN yarn install --production
 ---> Running in 587314d22e90
yarn install v1.22.19
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 85.61s.
Removing intermediate container 587314d22e90
 ---> 75de162ba469
Step 5/6 : CMD ["node", "src/index.js"]
 ---> Running in b1f4601166db
Removing intermediate container b1f4601166db
 ---> fdd8e052fe89
Step 6/6 : EXPOSE 3000
 ---> Running in 3cb8d90a9c75
Removing intermediate container 3cb8d90a9c75
 ---> b7dc31958ef0
Successfully built b7dc31958ef0
Successfully tagged getting-started:latest
(base) kabeer@kabeer-HP-EliteBook-745-G2:~/D1/getting-started-app$ docker run -dp 127.0.0.1:3000:3000 getting-started
959e48688e13b7f90a02c73fd8fbbc7ca9e3eb2a8602dd905432ad24652714eb
(base) kabeer@kabeer-HP-EliteBook-745-G2:~/D1/getting-started-app$ 