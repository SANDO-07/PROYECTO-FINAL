package com.sistema.ventas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "usuarios")
public class Usuario {
    @Id
    private String id;
    private String nombre;
    private String email;
    private String password;
    private String perfil; // Cliente o Administrador
}
