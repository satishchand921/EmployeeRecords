package com.myBatisUtil;

import java.io.IOException;
import java.io.Reader;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;


public class mybatisUtil {
	public static SqlSession getSqlSessionFactory() {
			Reader reader = null;
			try {
				reader = Resources.getResourceAsReader("mybatis-config.xml");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        
	        SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
	         
	        SqlSessionFactory sessionFactory = builder.build(reader);
	         
	        SqlSession session = sessionFactory.openSession(true);
	        
	        return session;
	}
}
