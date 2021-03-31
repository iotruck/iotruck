package br.com.iotruck.bino.services;

import br.com.iotruck.bino.entity.SecurityAnalyst;
import java.util.List;
import java.util.Optional;

public interface ISecurityAnalystServices {

    Boolean create(SecurityAnalyst analyst);

    Boolean update(int id, SecurityAnalyst analyst );

    Boolean delete(int id);

    List<SecurityAnalyst> getAll();

    Optional<SecurityAnalyst> getById(int id);
}
