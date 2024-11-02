package com.sistema.ventas.controller;

import com.sistema.ventas.model.Pedido;
import com.sistema.ventas.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping
    public List<Pedido> obtenerPedidos() {
        return pedidoService.obtenerTodosLosPedidos();
    }

    @PostMapping
    public Pedido realizarPedido(@RequestBody Pedido pedido) {
        return pedidoService.realizarPedido(pedido);
    }
}
