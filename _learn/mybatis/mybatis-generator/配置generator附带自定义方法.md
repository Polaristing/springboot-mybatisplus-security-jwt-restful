1. 配置插件
```xml
     <plugin>
         <groupId>org.mybatis.generator</groupId>
         <artifactId>mybatis-generator-maven-plugin</artifactId>
         <version>1.3.7</version>
         <configuration>
             <verbose>true</verbose>
             <overwrite>true</overwrite>
             <!--配置文件目录-->
             <configurationFile>src/main/resources/generatorConfig.xml</configurationFile>
         </configuration>
         <executions>
             <execution>
                 <id>Generate MyBatis Artifacts</id>
                 <!--此处默认绑定在了package声明周期。若打包时不想再次生成代码，设置为所用打包maven语句，最后生命周期之后的生命周期即可-->
                 <phase>deploy</phase>
                 <goals>
                     <goal>generate</goal>
                 </goals>
             </execution>
         </executions>
         <dependencies>
             <dependency>
                 <groupId>mysql</groupId>
                 <artifactId>mysql-connector-java</artifactId>
                 <version>5.1.44</version>
             </dependency>
             <!--<dependency>-->
             <!--<groupId>com.oracle</groupId>-->
             <!--<artifactId>ojdbc6</artifactId>-->
             <!--<version>11.2.0.2.0</version>-->
             <!--<scope>system</scope>-->
             <!--<systemPath>${basedir}/lib/ojdbc6.jar</systemPath>-->
             <!--</dependency>-->
             <dependency>
                 <groupId>org.mybatis.generator</groupId>
                 <artifactId>mybatis-generator-core</artifactId>
                 <version>1.3.7</version>
             </dependency>
             <dependency>
                 <groupId>tk.mybatis</groupId>
                 <artifactId>mapper</artifactId>
                 <version>4.1.5</version>
             </dependency>
             <!--自定义generator生成内容-->
             <dependency>
                 <groupId>com.github.MissThee</groupId>
                 <artifactId>mybatis-generator-custom-plugin</artifactId>
                 <version>2.4</version>
             </dependency>
         </dependencies>
     </plugin>
```
2. 将配置文件，如：generatorConfig放置指定目录
3. maven 运行mybatis-generator