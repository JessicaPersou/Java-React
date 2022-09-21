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
    private ClientRepository clientRepository;

    @GetMapping
    public List<ClientModel> findAll() {
        return clientRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable long id) {
        return clientRepository.findById(id)
                .map(save -> ResponseEntity.ok().body(save))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ClientModel> create(@RequestBody ClientModel clientModel) {
        return ResponseEntity.status(HttpStatus.CREATED).body(clientRepository.save(clientModel));
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ClientModel> update(@PathVariable("id") long id, @RequestBody ClientModel clientModel) {

        return clientRepository.findById(id)
                .map(save -> {
                    save.setFullName(clientModel.getFullName());
                    save.setCpf(clientModel.getCpf());
                    save.setDate(clientModel.getDate());
                    ClientModel updated = clientRepository.save(save);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<?> delete(@PathVariable long id) {
        return clientRepository.findById(id)
                .map(save -> {
                    clientRepository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}