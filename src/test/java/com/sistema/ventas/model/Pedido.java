package com.sistema.ventas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.List;

@Data
@Document(collection = "pedidos")
public class Pedido {
    @Id
    private String id;
    private String idCliente;
    private List<Producto> productos;
    private double total;
    private String estado; // Pendiente, Pagado, Enviado
}
