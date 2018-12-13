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
public class ManualFeaturesController {
	@Autowired
	private ManualFeaturesRepository repository;
	//show all the manualFeatures
			@RequestMapping("/manualFeatures")
		    public Iterable<ManualFeatures> manualFeatures(@RequestParam(value="name", defaultValue="World")int id,String name,Timestamp time,int quantity) {
		        return repository.findAll();
		   }
			//show manualFeatures by id
			@RequestMapping("/manualFeatures/{id}")
		    public Optional<ManualFeatures> manualFeature(@PathVariable("id") int id,String name,Timestamp time,int quantity) {
		        return repository.findById(quantity);
		   }
			//create new manualFeatures
			@RequestMapping(value = "/createmanualFeatures" , method = RequestMethod.POST)
		    public @ResponseBody ManualFeatures create(@RequestBody ManualFeatures item) {
				return repository.save(item);
		   }
			//update manualFeatures
			@RequestMapping(value = "/updatemanualFeatures" , method = RequestMethod.PUT)
		    public @ResponseBody ManualFeatures update(@RequestBody ManualFeatures item) {
		    	return repository.save(item);
		   }
			//delete manualFeatures
			@RequestMapping(value = "/deletemanualFeatures" , method = RequestMethod.DELETE)
		    public void delete(@RequestBody ManualFeatures item) {
		    	repository.delete(item);
		   }
	}