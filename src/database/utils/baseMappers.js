export function BaseMappers() {
  this.mapper = async (entity, data) => {
    const arrEntities = [];

    for await (const dataCurrent of data){
        for await (const [columnName, columnValue] of Object.entries(entity)){
            const newEntity = entity;
    
            newEntity.attributes[columnName] = dataCurrent[columnName];
            
            arrEntities.push(newEntity)
        }
    }

    return arrEntities;
  };
}
