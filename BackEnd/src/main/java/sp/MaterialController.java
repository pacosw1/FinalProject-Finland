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
public class MaterialController {
	@Autowired
	private MaterialRepository repository;
	//show all the materials
			@RequestMapping("/material")
		    public Iterable<Material> materials(@RequestParam(value="name", defaultValue="World")int id, int materialID,String name,String materialType,String image) {
		        return repository.findAll();
		   }
			//show material by id
			@RequestMapping("/material/{id}")
		    public Optional<Material> material(@PathVariable("id") int id, int materialID,String name,String materialType,String image) {
		        return repository.findById(materialID);
		   }
			//create new material
			@RequestMapping(value = "/creatematerial" , method = RequestMethod.POST)
		    public @ResponseBody Material create(@RequestBody Material item) {
				return repository.save(item);
		   }
			//update material
			@RequestMapping(value = "/updatematerial" , method = RequestMethod.PUT)
		    public @ResponseBody Material update(@RequestBody Material item) {
		    	return repository.save(item);
		   }
			//delete material
			@RequestMapping(value = "/deletematerial" , method = RequestMethod.DELETE)
		    public void delete(@RequestBody Material item) {
		    	repository.delete(item);
		   }
	}