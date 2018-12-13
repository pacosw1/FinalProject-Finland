package sp;

import java.sql.Timestamp;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PartController {
	@Autowired
	private PartRepository repository;

	//show all the parts
	@RequestMapping("/part")
    public Iterable<Part> parts(@RequestParam(value="id", defaultValue="0")  int id,int modelFeatureID, int manualFeatureID,Timestamp estimatedTime,int quantity){
        return repository.findAll();
   }
	//show part by part
	@RequestMapping("/part/{id}")
    public Optional<Part> part(@PathVariable("id") int id,int modelFeatureID, int manualFeatureID,Timestamp estimatedTime,int quantity) {
        return repository.findById(modelFeatureID);
   }
	//create new part
	@RequestMapping(value = "/createpart" , method = RequestMethod.POST)
    public @ResponseBody Part create(@RequestBody Part item) {
    	return repository.save(item);
   }
	//update part
	@RequestMapping(value = "/updatepart" , method = RequestMethod.PUT)
    public @ResponseBody Part update(@RequestBody Part item) {
    	return repository.save(item);
   }
	//delete part
	@RequestMapping(value = "/deletepart/{id}" , method = RequestMethod.DELETE)
    public void delete(@RequestBody Part item) {
    	repository.delete(item);
   }
}
