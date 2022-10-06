CREATE TABLE `oauth_client_details` (
  `client_id` varchar(255) NOT NULL COMMENT '客户端标识',
  `resource_ids` varchar(255) DEFAULT NULL COMMENT '接入资源列表',
  `client_secret` varchar(255) DEFAULT NULL COMMENT '客户端秘钥',
  `scope` varchar(255) DEFAULT NULL COMMENT '授权范围',
  `authorized_grant_types` varchar(255) DEFAULT NULL COMMENT '允许授权类型',
  `web_server_redirect_uri` varchar(255) DEFAULT NULL COMMENT '客户端的重定向URI',
  `authorities` varchar(255) DEFAULT NULL COMMENT '客户端所拥有的权限值',
  `access_token_validity` int(11) DEFAULT NULL COMMENT '设定客户端的access_token的有效时间值(单位:秒)',
  `refresh_token_validity` int(11) DEFAULT NULL COMMENT '设定客户端的refresh_token的有效时间值(单位:秒',
  `additional_information` text COMMENT '这是一个预留的字段,在Oauth的流程中没有实际的使用,可选,但若设置值,必须是JSON格式的数据,',
  `create_time` timestamp NULL DEFAULT NULL,
  `archived` tinyint(1) DEFAULT NULL COMMENT '用于标识客户端是否已存档(即实现逻辑删除),默认值为’0’(即未存档)',
  `trusted` tinyint(1) DEFAULT NULL COMMENT '设置客户端是否为受信任的,默认为’0’(即不受信任的,1为受信任的)',
  `autoapprove` varchar(255) DEFAULT NULL COMMENT '设置用户是否自动Approval操作, 默认值为 ‘false’, 可选值包括 ‘true’,‘false’, ‘read’,‘write’. ',
  PRIMARY KEY (`client_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
