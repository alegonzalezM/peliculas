package com.example.peliculas.spr.spring.dao;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.peliculas.spr.spring.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {
    Usuario findByUsername(String username);
}
