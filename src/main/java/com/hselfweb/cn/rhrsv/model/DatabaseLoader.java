package com.hselfweb.cn.rhrsv.model;

import com.hselfweb.cn.rhrsv.view.HomePage;
import com.hselfweb.cn.rhrsv.view.HomePageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final HomePageRepository repository;

    @Autowired
    public DatabaseLoader(HomePageRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new HomePage());
    }
}