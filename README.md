up and running docker-compose file using this command
```
docker-compose up
```

Then login mysql or postgres using adminer.

Open a browser and go to adminer using localhost that describe in docker-compose file.
```
localhost:8080
```

Login postgres or mysql using this credentials.

**postgres**
| type | value |
| --- | ----------- |
| server | postgres |
| username | postgres |
| password | example |

We use password as `example` because it declare in docker-compose file
```yml
    environment:
      POSTGRES_PASSWORD: example
```

**mysql**
| type | value |
| --- | ----------- |
| server | mysql |
| username | root |
| password | example |

We use password as `example` because it declare in docker-compose file
```yml
    environment:
      MYSQL_ROOT_PASSWORD: example
```