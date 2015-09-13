package com.etl.parseinput;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import com.etl.parseinput.model.Table;

@SuppressWarnings("hiding")
public class CSVLoader<String> extends AbstractInputLoader<String>{

	@Override
	public Table loadData(String inputFile) throws LoadFailException{
		try{
			Scanner sc = new Scanner(new File("input.csv"));
			sc.useDelimiter(",");
			Table t =  new Table();
			
			
		}catch(FileNotFoundException fileNotFoundException){
			throw new LoadFailException("File Not found while parsing CSV File-- " + inputFile);
		}catch(Exception exception){
			throw new LoadFailException("Unknown Exception caught while parsing the CSV File.");
		}
		return null;
	}
}
