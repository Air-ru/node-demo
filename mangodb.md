# 下载 mangoDB 压缩包

    https://www.mongodb.com/download-center/community
    sudo curl -O https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-4.2.6.tgz

- 解压

    sudo tar -zxvf mongodb-macos-x86_64-4.2.6.tgz

- 重命名
    sudo mv mongodb-macos-x86_64-4.2.6/ mongodb

- 配置全局变量
    export PATH=/usr/local/mongodb/bin:$PATH

- 配置数据库目录
    sudo mongod --dbpath=/data/db

- 启动数据库
    sudo mongod
