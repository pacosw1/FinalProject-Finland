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
public class OrderController {
	@Autowired
	private OrderRepository repository;
	//show all the clients
			@RequestMapping("/orders")
		    public Iterable<Order> order(@RequestParam(value="name", defaultValue="World")int id,int orderID,String client,String parts,String material,Timestamp deadline,String received,String lastHandled) {
		        return repository.findAll();
		   }
			//show order by id
			@RequestMapping("/order/{id}")
		    public Optional<Order> client(@PathVariable("id") int id,int orderID,String client,String parts,String material,Timestamp deadline,String received,String lastHandled) {
		        return repository.findById(orderID);
		   }
			//create new order
			@RequestMapping(value = "/createorder" , method = RequestMethod.POST)
		    public @ResponseBody Order create(@RequestBody Order item) {
				return repository.save(item);
		   }
			//update order
			@RequestMapping(value = "/updateorder" , method = RequestMethod.PUT)
		    public @ResponseBody Order update(@RequestBody Order item) {
		    	return repository.save(item);
		   }
			//delete order
			@RequestMapping(value = "/deleteorder" , method = RequestMethod.DELETE)
		    public void delete(@RequestBody Order item) {
		    	repository.delete(item);
		   }
	}