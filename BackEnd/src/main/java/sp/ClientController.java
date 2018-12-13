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
public class ClientController {
	@Autowired
	private ClientRepository repository;
	//show all the clients
			@RequestMapping("/clients")
		    public Iterable<Client> clients(@RequestParam(value="name", defaultValue="World")int id, int clientID,String name,int phoneNumber,Long addressID,String email,String text) {
		        return repository.findAll();
		   }
			//show client by id
			@RequestMapping("/client/{id}")
		    public Optional<Client> client(@PathVariable("id") int id,int clientID,String name,int phoneNumber,Long addressID,String email,String text) {
		        return repository.findById(clientID);
		   }
			//create new client
			@RequestMapping(value = "/createclient" , method = RequestMethod.POST)
		    public @ResponseBody Client create(@RequestBody Client item) {
				return repository.save(item);
		   }
			//update client
			@RequestMapping(value = "/updateclient" , method = RequestMethod.PUT)
		    public @ResponseBody Client update(@RequestBody Client item) {
		    	return repository.save(item);
		   }
			//delete client
			@RequestMapping(value = "/deleteclient" , method = RequestMethod.DELETE)
		    public void delete(@RequestBody Client item) {
		    	repository.delete(item);
		   }
	}