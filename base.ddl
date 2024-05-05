

CREATE TABLE resenna (
    titulo         VARCHAR2(20 BYTE) NOT NULL,
    clasificacion  NUMBER(1) NOT NULL,
    descripcion    VARCHAR2(80 BYTE) NOT NULL,
    nombre_usuario VARCHAR2(20) NOT NULL
);

CREATE TABLE usuario (
    nombre_usuario VARCHAR2(20) NOT NULL,
    contrasenna     VARCHAR2(10 BYTE) NOT NULL
);

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( nombre_usuario );

ALTER TABLE resenna
    ADD CONSTRAINT resenna_usuario_fk FOREIGN KEY ( nombre_usuario )
        REFERENCES usuario ( nombre_usuario );




