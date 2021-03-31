package br.com.iotruck.bino.controller;

import br.com.iotruck.bino.entity.SecurityAnalyst;
import br.com.iotruck.bino.services.SecurityAnalystServices;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/securityanalyst")
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RestController
@Api("Bino API REST Security Analyst")
public class SecurityAnalystController {

    private SecurityAnalystServices services;

    @GetMapping("{id}")
    @ApiOperation("Retorna um analista buscando por id")
    public ResponseEntity getById(@PathVariable int id) {
        if (id <= 0)
            return ResponseEntity.badRequest().body("O id não pode ser menor ou igual a zero");

        return ResponseEntity.of(services.getById(id));
    }

    @GetMapping
    @ApiOperation("Retorna uma lista de analista")
    public ResponseEntity getAll(){
        List<SecurityAnalyst> analysts = services.getAll();
        if (analysts.isEmpty())
            return ResponseEntity.noContent().build();

        return ResponseEntity.ok(analysts);
    }

    @PostMapping
    @ApiOperation("Cria uma analista")
    public ResponseEntity postAnalyst(@RequestBody SecurityAnalyst analyst){
        services.create(analyst);
        return ResponseEntity.status(201).build();

    }

    @PutMapping("/{id}")
    @ApiOperation("Atualiza um analista")
    public ResponseEntity putAnalyst(@PathVariable int id,
                                     @RequestBody SecurityAnalyst analyst){

        if(services.update(id, analyst))
            return ResponseEntity.ok().build();

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @ApiOperation("Remove um analista")
    public ResponseEntity deleteAnalyst(@PathVariable int id){
        if (services.delete(id))
            return ResponseEntity.ok().build();

        return ResponseEntity.notFound().build();
    }
}
