package sp;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name = "Order")
public class Order implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int orderID;
	private String client;
	private String parts;
	private String material;
	private Timestamp deadline;
	private String received;
	private String lastHandled;

	public Order() {
	}
	
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getOrderID() {
		return this.orderID;
	}

	public void setOrderID(int orderID) {
		this.orderID = orderID;
	}

	public String getClient() {
		return this.client;
	}

	public void setClient(String client) {
		this.client = client;
	}

	public String getParts() {
		return this.parts;
	}

	public void setParts(String parts) {
		this.parts = parts;
	}

	public String getMaterial() {
		return this.material;
	}

	public void setmMterial(String material) {
		this.material = material;
	}

	public Timestamp getDeadline() {
		return this.deadline;
	}

	public void setDeadline(Timestamp deadline) {
		this.deadline = deadline;
	}

	public String getReceived() {
		return this.received;
	}

	public void setReceived(String received) {
		this.received = received;
	}

	public String getLastHandled() {
		return this.lastHandled;
	}

	public void setLastHandled(String lastHandled) {
		this.lastHandled = lastHandled;
	}

}
