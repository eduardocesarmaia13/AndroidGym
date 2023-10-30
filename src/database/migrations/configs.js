export function ConfigsMigration() {
  this.execute = async (pgAdmin) => {
    await pgAdmin.query(`CREATE TABLE IF NOT EXISTS configs (
        id            SERIAL PRIMARY KEY,
        label         VARCHAR(250) NOT NULL,
        value         VARCHAR(250) NOT NULL,
        reference     VARCHAR(250) NOT NULL,
        created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`);
  };
}
