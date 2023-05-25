docker build --no-cache -f SQL\Dockerfile.PostgreSql -t supersales/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t supersales/app ../..
