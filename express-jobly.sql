\echo 'Delete and recreate express_jobly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE express_jobly;
CREATE DATABASE express_jobly;
\connect express_jobly

\i express-jobly-schema.sql
\i express-jobly-seed.sql

\echo 'Delete and recreate express_jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE express_jobly_test;
CREATE DATABASE express_jobly_test;
\connect express_jobly_test

\i express-jobly-schema.sql
