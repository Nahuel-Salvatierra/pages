// backend/entities/Plantilla.js
const { Entity, PrimaryGeneratedColumn, Column } = require('typeorm');

@Entity()
class Plantilla {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  imagen;

  @Column()
  alts;

  @Column()
  titulos;

  @Column()
  descripciones;
}

module.exports = Plantilla;
