package com.sistema.ventas.service;

import com.sistema.ventas.model.Pedido;
import com.sistema.ventas.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public List<Pedido> obtenerTodosLosPedidos() {
        return pedidoRepository.findAll();
    }

    public Pedido realizarPedido(Pedido pedido) {
        return pedidoRepository.save(pedido);
    }
}
