package com.application.client.controller;

import com.application.client.models.ClientModel;
import com.application.client.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientRepository repository;

    @GetMapping
    public List<ClientModel> findAll(){
        return repository.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable long id){
        return repository.findById(id)
                .map(save -> ResponseEntity.ok().body(save))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ClientModel> create(@RequestBody ClientModel clientModel){
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(clientModel));
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ClientModel> update(@PathVariable long id, @RequestBody ClientModel clientModel) {
        return repository.findById(id)
                .map(save -> {
                    save.setFullName(clientModel.getFullName());
                    save.setCpf(clientModel.getCpf());
                    save.setDate(clientModel.getDate());
                    ClientModel update = repository.save(save);
                    return ResponseEntity.ok().body(update);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<?> delete(@PathVariable long id) {
        return repository.findById(id)
                .map(save -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }

}
