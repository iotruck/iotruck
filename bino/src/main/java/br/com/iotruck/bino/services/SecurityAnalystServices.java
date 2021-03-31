package br.com.iotruck.bino.services;

import br.com.iotruck.bino.entity.SecurityAnalyst;
import br.com.iotruck.bino.repository.ISecurityAnalystRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class SecurityAnalystServices implements ISecurityAnalystServices{

    private final ISecurityAnalystRepository repository;


    public Boolean create(SecurityAnalyst analyst){
        repository.save(analyst);
        return true;
    }

    public Boolean update(int id, SecurityAnalyst analyst ){
        if(repository.existsById(id)){
            analyst.setId(id);
            repository.save(analyst);

            return true;
        }
        return false;
    }

    public Boolean delete(int id){
        if(repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<SecurityAnalyst> getAll(){
        return repository.findAll();
    }

    public Optional<SecurityAnalyst> getById(int id) {
        Optional<SecurityAnalyst> analyst = repository.findById(id);
        if (analyst != null)
            return analyst;

        return null;
    }
}
