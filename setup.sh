PGPORT=5432
PGHOST="localhost"
PGUSER="eric"
DEV_PGDB="dev_ticketmobu"
TEST_PGDB="test_ticketmobu"
Template="template0"
createdb -h $PGHOST -T $Template   -p $PGPORT -U $PGUSER $DEV_PGDB
createdb -h $PGHOST -T $Template   -p $PGPORT -U $PGUSER $TEST_PGDB
touch .env
cat >> .env << EOF
DEV_DATABASE_URL=postgres:postgres@localhost:5432/dev_ticketmobu
TEST_DATABASE_URL=postgres:postgres@localhost:5432/test_ticketmobu
EOF
touch .env.example
cat >> .env.example << EOF
DEV_DATABASE_URL=
TEST_DATABASE_URL=
EOF
# yarn install