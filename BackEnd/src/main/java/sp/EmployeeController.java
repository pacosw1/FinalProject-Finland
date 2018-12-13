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
public class EmployeeController {
	@Autowired
	private EmployeeRepository repository;
	//show all the employees
			@RequestMapping("/employee")
		    public Iterable<Employee> employees(@RequestParam(value="name", defaultValue="World")int id, int employeeID,String name,String email,String privilege,String jobTitle) {
		        return repository.findAll();
		   }
			//show employee by id
			@RequestMapping("/employee/{id}")
		    public Optional<Employee> employee(@PathVariable("id") int id, int employeeID,String name,String email,String privilege,String jobTitle) {
		        return repository.findById(employeeID);
		   }
			//create new employee
			@RequestMapping(value = "/createemployee" , method = RequestMethod.POST)
		    public @ResponseBody Employee create(@RequestBody Employee item) {
				return repository.save(item);
		   }
			//update employee
			@RequestMapping(value = "/updateemployee" , method = RequestMethod.PUT)
		    public @ResponseBody Employee update(@RequestBody Employee item) {
		    	return repository.save(item);
		   }
			//delete employee
			@RequestMapping(value = "/deleteemployee" , method = RequestMethod.DELETE)
		    public void delete(@RequestBody Employee item) {
		    	repository.delete(item);
		   }
	}