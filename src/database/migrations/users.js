export function UsersMigration() {
  this.execute = async (pgAdmin) => {
    await pgAdmin.query(`
      DROP TYPE IF EXISTS GENDER;
      CREATE TYPE GENDER AS ENUM ('MASCULINO', 'FEMININO');
    
      CREATE TABLE IF NOT EXISTS users (
        id          SERIAL PRIMARY KEY,
        name        VARCHAR(100) NOT NULL,
        birthdate   DATE NOT NULL,
        cpf         VARCHAR(25) NOT NULL UNIQUE,
        gender      GENDER NOT NULL,
        weight      NUMERIC(3, 2),
        height      NUMERIC(3, 2),
        email       VARCHAR(250) NOT NULL UNIQUE,
        mobile      VARCHAR(30) NOT NULL, 
        password    VARCHAR(30) NOT NULL,
        recovery    VARCHAR(100),
        cep         VARCHAR(30),
        is_admin    BOOLEAN DEFAULT(FALSE),
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`);
  };
}
