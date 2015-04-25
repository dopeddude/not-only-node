package com.accuracap.non;

import org.apache.commons.lang3.StringUtils;

public class TestMainEntry {
	
	public static void main(String[] args) {
		
		String a = "Here I am";
		String b = "Here you are";
		
		System.out.println(StringUtils.difference(a, b));
		
	}

}
