FROM node:6
ENV INSTALL_PATH /project
RUN mkdir $INSTALL_PATH
WORKDIR $INSTALL_PATH
RUN npm install devtool -g