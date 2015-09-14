package algos;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import algos.practice.Edge;
import algos.practice.GraphAdjList;
import algos.practice.GraphNode;

public class Kruskal {
	
	static void MakeSet(GraphNode node){
		node.parent = node;
		node.rank = 0;
	}
	
	static GraphNode find(GraphNode node){
		if(!node.equals(node.parent)){
			node.parent = find(node.parent);
		}
		return node.parent;
	}
	
	static void union(GraphNode u,GraphNode v){
		if(u.rank > v.rank){
			v.parent = u;
		}else if(u.rank < v.rank){
			u.parent = v;
		}else{
			v.parent = u;
			u.rank++;
		}
	}
	
	static Set<Edge> Main(GraphAdjList graph){
		//empty forest
		MinPQ<Edge> minPq = new MinPQ<Edge>(graph.getE());
		Set<Edge> set = new HashSet<Edge>();
		for(GraphNode node:graph){
			MakeSet(node);
			for(Edge edge:node.edges){
				minPq.insert(edge);
			}
		}
		
		while(minPq.size()!=0){
			Edge edge = minPq.delMin();
			GraphNode ru = find(edge.u);
			GraphNode rv = find(edge.v);
			if(!ru.equals(rv)){
				set.add(edge);
				union(ru, rv);
			}
		}
		return set;
	}
	
	
	public static void main(String[] args){
		GraphAdjList graph = new GraphAdjList();
		graph.loadGraph();
		//set the root node.
		Set<Edge> set = Main(graph);
		Iterator<Edge> it = set.iterator();
		int i = 0;Edge edge = null;
		while(it.hasNext()){
			edge = it.next();
			System.out.println(edge.u+" "+edge.v);
			i = i + edge.w;
		}
		System.out.println("weight = "+ i);
	}
	
}
