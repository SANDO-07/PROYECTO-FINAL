package com.sistema.ventas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "productos")
public class Producto {
    @Id
    private String id;
    private String nombre;
    private String descripcion;
    private double precio;
    private int stock;
    private String categoria;
}
