package com.sistema.ventas.repository;

import com.sistema.ventas.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    Usuario findByEmail(String email);
}
