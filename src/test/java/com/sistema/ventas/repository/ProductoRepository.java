package com.sistema.ventas.repository;

import com.sistema.ventas.model.Producto;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductoRepository extends MongoRepository<Producto, String> {
}
