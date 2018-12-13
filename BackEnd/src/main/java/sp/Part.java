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
@Table(name = "Part")
public class Part implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int modelFeatureID;
	private int manualFeatureID;
	private Timestamp estimatedTime;
	private int quantity;

	
	public Part() {
	}
	
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public int getModelFeatureID() {
		return this.modelFeatureID;
	}

	public void setModelFeatureID(int modelFeatureID) {
		this.modelFeatureID = modelFeatureID;
	}

	public int getManualFeatureID() {
		return this.manualFeatureID;
	}

	public void setManualfeatureID(int manualfeatureID) {
		this.manualFeatureID = manualfeatureID;
	}

	public Timestamp getEstimatedTime() {
		return this.estimatedTime;
	}

	public void setEstimatedTime(Timestamp estimatedTime) {
		this.estimatedTime = estimatedTime;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
