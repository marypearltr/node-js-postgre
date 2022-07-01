module.exports = {
  DATABASE_URL:
    "postgres://venybufafoexee:61b1c7ddf1f387fec4799080307e9df78c878d715d1a1ad5de66b83156668985@ec2-34-200-35-222.compute-1.amazonaws.com:5432/d770vg70u95i8n",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
