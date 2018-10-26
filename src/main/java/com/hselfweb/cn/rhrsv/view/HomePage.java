package com.hselfweb.cn.rhrsv.view;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class HomePage {
    private @Id
    @GeneratedValue
    Long id;
   private List<String> carousl = new ArrayList<>();
   private List<String> link=new ArrayList<>();
   private String video;
   private String map;
   public HomePage(){};
   HomePage(List<String> carousl,List<String> link,String video,String map){
       this.carousl=carousl;
       this.link=link;
       this.video=video;
       this.map=map;
   }
}
