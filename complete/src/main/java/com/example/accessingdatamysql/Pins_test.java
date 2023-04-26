package com.example.accessingdatamysql;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "Pins_test")
public class Pins_test {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer pin_id;

	@Column(name = "outletNum")
	private String outletNum;

	public Integer getPin_id() {
		return pin_id;
	}

	public void setPin_id(Integer Pin_id) {
		this.pin_id = Pin_id;
	}

	public String getOutletNum() {
		return outletNum;
	}

	public void setOutletNum(String OutletNum) {
		this.outletNum = OutletNum;
	}

}
