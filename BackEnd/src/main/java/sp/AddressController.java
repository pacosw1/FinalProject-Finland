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
public class AddressController {
	@Autowired
	private AddressRepository repository;
	
	//test method
	@RequestMapping("/test")
    public String test(@RequestParam(value="name", defaultValue="World") String name) {
        return "{\"id\":\"hello\"}";
    }
	
	//show all the address
	@RequestMapping("/address")
    public Iterable<Address> address(@RequestParam(value="id", defaultValue="0")  int id,String street, int streetNumber,String city,int zipcode,String state,String country,String extra){
        return repository.findAll();
   }
	//show address by country
	@RequestMapping("/address/{id}")
    public Optional<Address> address(@PathVariable("id") int id,String street, int streetNumber,String city,int zipcode,String state,String country) {
        return repository.findById(zipcode);
   }
	//create new address
	@RequestMapping(value = "/createaddress/{street,streetNumber,city,zipcode,state,country,extra}" , method = RequestMethod.POST)
    public @ResponseBody Address create(@RequestBody Address item) {
    	return repository.save(item);
   }
	//update address
	@RequestMapping(value = "/updateaddress" , method = RequestMethod.PUT)
    public @ResponseBody Address update(@RequestBody Address item) {
    	return repository.save(item);
   }
	//delete address
	@RequestMapping(value = "/deleteaddress/{id}" , method = RequestMethod.DELETE)
    public void delete(@RequestBody Address item) {
    	repository.delete(item);
   }
}
