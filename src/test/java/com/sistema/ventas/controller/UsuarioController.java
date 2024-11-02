package com.sistema.ventas.controller;

import com.sistema.ventas.model.Usuario;
import com.sistema.ventas.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registrar")
    public Usuario registrarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.registrarUsuario(usuario);
    }

    @GetMapping("/{email}")
    public Usuario obtenerUsuario(@PathVariable String email) {
        return usuarioService.obtenerUsuarioPorEmail(email);
    }
}
